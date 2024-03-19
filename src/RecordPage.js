import React, { useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const RecordPage = () => {
  const [feedback, setFeedback] = useState("");
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });

  const handleSubmission = () => {
    const feedbacks = [
      "Your pronunciation of the 'ع' (‘Ayn) is improving, but try to emphasize the throaty sound more.",
      "Excellent job with the 'ق' (Qaf)! It's a tough sound, but you're getting it right.",
      "Remember, the 'ح' (Ha) is more than just an 'h' sound. It comes deep from the throat.",
      "Watch out for the 'خ' (Kha). It's not just a hard 'h'—it has a bit of a raspy sound to it.",
      "You're doing well with the 'ر' (Ra), but remember it's a rolling sound right off the tip of your tongue.",
      "The 'ض' (Dad) is unique to Arabic. Try to press your tongue more against your upper teeth to get it right.",
      "Great effort on the 'ص' (Sad) and 'ط' (Ta). Remember, they are deeper and sharper than their non-emphatic counterparts.",
      "Your 'ل' (Lam) sounds good, but when it comes before 'ال' (Al), remember it can sometimes blend and sound different.",
      "The 'غ' (Ghayn) is well-pronounced. It’s like the French 'r,' but deeper from the throat.",
      "You're almost there with the 'ظ' (Dhah). It's like 'ض' (Dad), but with your tongue a bit further back.",
      "Be mindful of the long vowels ('ا', 'و', 'ي'). They can change the meaning of words dramatically.",
      "The 'ش' (Sheen) is spot on! It's exactly like the 'sh' in 'sheep,' but try to make it a bit sharper.",
      "You've got the 'ج' (Jeem) down perfectly. It's just like the 's' in 'measure.'",
      "The 'ذ' (Dhal) is like the 'th' in 'this.' Your pronunciation is getting clearer.",
      "Be careful with the 'ث' (Tha). It's like the 'th' in 'think,' not 'this.'",
      "Your mastery of the 'س' (Seen) and 'ص' (Sad) difference is impressive. The 'ص' is much deeper.",
      "The 'ن' (Noon) is well done. Just be careful it doesn’t sound too much like the English 'n.'",
      "Your light 'ت' (Ta) and emphatic 'ط' (Ta) distinction is clear. The emphatic version is deeper and fuller.",
      "Watch the vowel lengths. Arabic has short and long vowels, and they can change the word's meaning.",
      "Your sentence rhythm is improving, but remember, Arabic rhythm depends on long and short vowels and syllable structure.",
    ];
    const randomFeedback =
      feedbacks[Math.floor(Math.random() * feedbacks.length)];
    setFeedback(randomFeedback);
  };

  return (
    <div>
      <h1>Say something in Arabic</h1>
      <p>Status: {status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
      <button onClick={handleSubmission}>Submit</button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default RecordPage;
