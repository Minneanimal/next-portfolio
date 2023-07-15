import BaseMap from "@/components/gis/baseMap";

async function getData() {
	const basemapEnum = "ArcGIS:Streets";
	const headers = {
		Accept: "application/json",
	};

	const res = await fetch(
		`https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${process.env.ARCGIS_API_KEY}`,
		{
			method: "GET",
			headers: headers,
		}
	);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function GisPage() {
	const mapStyle = await getData();
	return (
		/*searchbar */
		/*layer selector*/
		/* info bar */
		<BaseMap mapStyle={mapStyle} />
	);
}
