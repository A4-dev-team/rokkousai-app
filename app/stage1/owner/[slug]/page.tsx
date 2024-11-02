import { View1 } from "./_components/View1";
import { View2 } from "./_components/View2";
import { View3 } from "./_components/View3";

export default function Page({ params }: { params: { slug: string } }) {
	if (params.slug === "scene-1") {
		return <View1 />;
	}
	if (params.slug === "scene-2") {
		return <View2 />;
	}
	if (params.slug === "scene-3") {
		return <View3 />;
	}

	return null;
}
