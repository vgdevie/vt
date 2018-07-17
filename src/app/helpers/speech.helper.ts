export class SpeechHelper {
  public speak(text: string, lang: string) {

    if (!text || text === '') {
      return;
    }

    let msg = new SpeechSynthesisUtterance(text);
    msg.voice = this.getVoice(lang);
    console.log(msg.voice);
    window.speechSynthesis.speak(msg);
  }

  private getVoice(lang: string): SpeechSynthesisVoice {
    let allVoices = window.speechSynthesis.getVoices();

    if (allVoices.length === 0) {
      throw new Error('No voices found');
    }

    let voicesByLang = allVoices.filter(voice => voice.lang.substr(0, 2).toLocaleLowerCase() === lang);

    if (voicesByLang.length === 0) {
      return allVoices[0];
    }

    return voicesByLang[0];
  }
}
