import json
import pandas as pd
import plotly.express as px

with open("indonesia.geojson") as f:
    geojson = json.load(f)

df = pd.read_csv("hasilpepaya.csv")

df_reshaped = df.melt(
    id_vars=["Provinsi"],
    var_name="Year",
    value_name="Produktivitas Pepaya"
)

df_reshaped["Produktivitas Pepaya"] = df_reshaped["Produktivitas Pepaya"].astype(str).str.replace(",", "")
df_reshaped["Produktivitas Pepaya"] = pd.to_numeric(df_reshaped["Produktivitas Pepaya"], errors='coerce')

custom_colorscale = [           
    (0, "red"),
    (0.15, "yellow"),
    (1, "green")
]

fig = px.choropleth(
    df_reshaped,
    geojson=geojson,
    locations="Provinsi",
    featureidkey="properties.state",
    animation_frame="Year",
    color="Produktivitas Pepaya",
    color_continuous_scale=custom_colorscale,
    labels={"Produktivitas Pepaya": "Produktivitas Pepaya (Ton)"},
)

fig.update_geos(fitbounds="locations", visible=False)
fig.update_layout(
    title={
        "text": "Produktivitas Pepaya di Indonesia",
        "xanchor": "center",
        "x": 0.5,
        "yanchor": "top",
        "y": 0.9,
    }
)
fig.show()

# simpan ke file HTML
fig.write_html("hasilmap.html")