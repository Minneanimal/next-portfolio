import BaseMap from "@/components/gis/baseMap";
import GtfsRealtimeBindings from "gtfs-realtime-bindings";

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

const getTransitData = async () => {
	try {
		const response = await fetch(
			"https://svc.metrotransit.org/mtgtfs/tripupdates.pb"
		);
		if (!response.ok) {
			const error = new Error(
				`${response.url}: ${response.status} ${response.statusText}`
			);
			throw error;
		}
		const buffer = await response.arrayBuffer();
		const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
			new Uint8Array(buffer)
		);
		feed.entity.forEach((entity) => {
			if (entity.tripUpdate) {
				console.log(entity.tripUpdate);
			}
		});
	} catch (error) {
		console.log(error);
	}
};

export default async function GisPage() {
	const mapStyle = await getData();
	const tripsUpdate = await getTransitData();
	console.log(tripsUpdate);
	return (
		/*searchbar */
		/*layer selector*/
		/* info bar */
		<BaseMap mapStyle={mapStyle} />
	);
}
