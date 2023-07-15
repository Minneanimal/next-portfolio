"use client";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";

type Props = {
	mapStyle: any;
};

export default function BaseMap({ mapStyle }: Props) {
	return (
		<Map
			initialViewState={{
				longitude: -122.4,
				latitude: 37.8,
				zoom: 14,
			}}
			style={{ width: "100%", height: "100vh" }}
			mapStyle={mapStyle}
			mapLib={maplibregl}
		/>
	);
}
