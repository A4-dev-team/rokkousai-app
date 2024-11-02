import { Scene1 } from "./_components/Scene1";
import { Scene2 } from "./_components/Scene2";
import { Scene3 } from "./_components/Scene3";

export default function Page({ params }: { params: { slug: string } }) {
	if (params.slug === "scene-1") {
		return <Scene1 />;
	}
	if (params.slug === "scene-2") {
		return <Scene2 />;
	}
	if (params.slug === "scene-3") {
		return <Scene3 />;
	}

	return null;
}
