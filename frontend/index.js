function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
      let divs = document.querySelectorAll('section div')
      console.log(divs)
      divs.forEach((div, idx) => {
        div.classList.add('widget')
        div.setAttribute('tabindex', idx + 1)
      }
        )
      
  // 👉 TASK 2 - Build a "Quote of the Day" widget
     console.log(quotes)
     const randomIndex = Math.floor(Math.random() * quotes.length)
     let quoteRandom = quotes[randomIndex]
     let quote = document.createElement('div')
     let quoteText = quoteRandom.quote
     quote.textContent = quoteText
     let widget1 = document.querySelector('.quoteoftheday')
     widget1.appendChild(quote)
     let authDate = document.createElement('div')
     const {author, date} = quoteRandom
     authDate.textContent = `${quoteRandom.author} in ${quoteRandom.date || "an unknown date"}`
     widget1.appendChild(authDate)
      console.log(quoteRandom.author, quoteRandom.date)


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  
  const randomVerb = Math.floor(Math.random() * verbs.length);
  const randomVerb2 = Math.floor(Math.random() * verbs.length);
  const verbRandom = verbs[randomVerb]
  const verbRandom2 = verbs[randomVerb2];
  const randomNoun = Math.floor(Math.random() * nouns.length);
  const randomNoun2 = Math.floor(Math.random() * nouns.length);
  const nounRandom = nouns[randomNoun];
  const nounRandom2 = nouns[randomNoun2];
  const randomAdverb = Math.floor(Math.random() * adverbs.length);
  const randomAdverb2 = Math.floor(Math.random() * adverbs.length);
  const adverbRandom = adverbs[randomAdverb];
  const adverbRandom2 = adverbs[randomAdverb2];
  const sentence = document.createElement('div');
  const widget2 = document.querySelector('.corporatespeak');
  sentence.textContent = `We need to ${verbRandom} our ${nounRandom} ${adverbRandom} in order to ${verbRandom2} our ${nounRandom2} ${adverbRandom2}.`

  widget2.appendChild(sentence)








  // 👉 TASK 4 - Build a "Countdown" widget
      const widget3 = document.querySelector('.countdown');
      const countdown = document.createElement('p');
      let count = 5;
      countdown.textContent = `T-minus ${count}...`;
      setInterval(() => {
        if (count === 1){
          countdown.textContent = `Liftoff! 🚀`
        } else {
        --count;
        countdown.textContent = `T-minus ${count}...`;
        
      }}, 1000);
      widget3.appendChild(countdown)


  // 👉 TASK 5 - Build a "Friends" widget
  
  const randomPerson = Math.floor(Math.random() * people.length);
  const personRandom = people[randomPerson];
  const widget4 = document.querySelector('.friends');
  console.log(personRandom)
  const friendsP = document.createElement('p')
  let friendsSent = `${personRandom.fname} ${personRandom.lname} was born in ${personRandom.dateOfBirth.slice(0,4)} and `
  if (!personRandom.friends.length){
    friendsSent += `has no friends.`
  } else { friendsSent += `is friends with `
    for (let i = 0; i < personRandom.friends.length; i++){
      const friend = people.find(p => p.id === personRandom.friends[i])
      const friendName = `${friend.fname} ${friend.lname}`
      if (i === personRandom.friends.length - 1){
        friendsSent += `${friendName}.`
      } else if (i === personRandom.friends.length - 2) {
        friendsSent += `${friendName} and `
      }
      else {
        friendsSent += `${friendName}, `
      }
    }
  }

  friendsP.textContent = friendsSent
  widget4.appendChild(friendsP)






  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  
  let classes = document.querySelectorAll('class')
      console.log(classes)
     // divs.forEach(div => {
       // div.classList.add('widget')
   //   }
       // )
  



}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
