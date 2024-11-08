import { Typewriter } from "react-simple-typewriter";

export function OneLineTypeWriter({ word }: { word: string }) {
	return <Typewriter words={[word]} loop={1} cursor={false} typeSpeed={50} />;
}
