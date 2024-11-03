import { Scene1 } from "./_components/Scene1";
import { Scene2 } from "./_components/Scene2";
import { Scene3 } from "./_components/Scene3";
import { Scene4 } from "./_components/Scene4";
import { Scene5 } from "./_components/Scene5";
import { Scene6 } from "./_components/Scene6";

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
	if (params.slug === "scene-4") {
		return <Scene4 />;
	}
	if (params.slug === "scene-5") {
		return <Scene5 />;
	}
	if (params.slug === "scene-6") {
		return <Scene6 />;
	}

	return null;
}
