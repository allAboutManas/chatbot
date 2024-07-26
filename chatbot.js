

  const qaData = [
    { question: "What is your return policy?", answer: "Our return policy is 30 days with receipt." },
    { question: "How can I track my order?", answer: "You can track your order using the tracking number we sent to your email." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to many countries." },
  { question: "Do you love me?", answer: "I appreciate your question, but I’m unable to feel emotions or love. Thank you for chatting with me! " },
    { question: "How to create new passwords", answer: "Go to the Advanced security options then Scroll down to the App passwords section and create a new app password and use it" },

];




function getBestMatch(userQuestion) {
    let bestMatch = { index: -1, score: 0 };
    qaData.forEach((qa, index) => {
        const score = similarity(userQuestion.toLowerCase(), qa.question.toLowerCase());
        if (score > bestMatch.score) {
            bestMatch = { index, score };
        }
    });
    return bestMatch;
}



function similarity(str1, str2) {
    // Simple similarity function (this is a placeholder; implement a more sophisticated one for better results)
    const commonWords = str1.split(' ').filter(word => str2.includes(word)).length;
    return commonWords / Math.max(str1.split(' ').length, str2.split(' ').length);
}



function handleUserInput(userQuestion) {
    const bestMatch = getBestMatch(userQuestion);
    if (bestMatch.score >= 0.8) {
        return qaData[bestMatch.index].answer;
    } else {
        initiateLiveChat();
        return "Sorry, I couldn't find an answer to your question. Please click the link to start a live chat.";
    }
}



function initiateLiveChat() {
    // This is a placeholder; integrate with a live chat service or send email to initiate live chat
    alert("Redirecting to live chat...");

    // Example of opening a live chat link (replace with actual live chat service URL)
    window.location.href = "mailto:support@company.com?subject=Live Chat Request&body=Please start a live chat with me.";
}
