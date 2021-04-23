// ==UserScript==
// @name         copy sender in gmail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Keepsake
// @author       You
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict'
  console.log("Tampering with TamperMonkey.")

  addButton("copy sender (alt+E)", copySenderEmail, {
    left: "85%"
  })

  document.addEventListener('keyup', function (e) {
    if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
      if (e.keyCode == 69 /*nice*/ ) {
        copySenderEmail()
      }
    }
  }, false)

})()


function copySenderEmail() {
  let t = document.querySelector('[data-tooltip="Show details"]')
  let email

  t.click()

  try {
    email = document.getElementsByClassName("go")[0].innerText
  } catch (error) {
    email = document.getElementsByClassName("gD")[0].innerText
  }

  console.log("email: ", email)

  if (email.includes("@arc.io")) {
    try {
      email = document.querySelectorAll(".ajA.SK .gI")[3].innerText
    } catch (error) {
      email = document.querySelectorAll(".ajA.SK .gI")[3].innerText
    }
  }

  // transforms "Félix Paradis <felix@lolz.io>" into "felix@lolz.io"
  let ltSignIndex = email.indexOf("<")
  if (ltSignIndex >= 0) {
    let gtSignIndex = email.indexOf(">")
    email = email.substring(ltSignIndex + 1, gtSignIndex)
  }

  console.log("email: ", email)
  return copyToClipboard(email);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Helper functions 👇
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function addButton(text, onclick, cssObj) {

  let basicCSS = {
    position: "absolute",
    padding: "1rem",
    top: "0%",
    left: "75%",
    cursor: "pointer",
    'z-index': 9,
  }

  const inlineCSS = {
    ...basicCSS,
    ...cssObj
  } // If both objects have a property with the same name, then the second object property overwrites the first.

  let button = document.createElement('button'),
    btnStyle = button.style
  document.body.appendChild(button)
  button.innerHTML = text
  button.onclick = onclick
  btnStyle.position = 'absolute'
  Object.keys(inlineCSS).forEach(key => btnStyle[key] = inlineCSS[key])
  return button
}

function copyToClipboard(s) {
  /* Get the text field */
  var textArea = document.createElement("textarea")
  textArea.value = s

  // Avoid scrolling to bottom
  textArea.style.top = "0"
  textArea.style.left = "0"
  textArea.style.position = "fixed"

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    var successful = document.execCommand('copy')
    var msg = successful ? 'successful' : 'unsuccessful'
    console.log('Fallback: Copying text command was ' + msg)
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}