import { currentLanguageTexts } from "./change_language.js";
import { typeWriterEffect } from "./typewriter.js";

function updateContentBasedOnScreenSize(languageTexts) {
	const widthScreen = window.innerWidth;

	if (widthScreen < 768) {
		typeWriterEffect(languageTexts.phrasesMobile);
	} else {
		typeWriterEffect(languageTexts.phrases);
	}
}

window.addEventListener("resize", () => {
	if (currentLanguageTexts) {
		updateContentBasedOnScreenSize(currentLanguageTexts);
	}
});

export { updateContentBasedOnScreenSize };
