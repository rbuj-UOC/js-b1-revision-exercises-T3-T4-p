jest.setTimeout(20000);
const fs = require('fs');
import { fetchSWAPIPeople } from '../T3-T4/T3-T4';
import { modifyPageNumberInput } from '../T3-T4/T3-T4';
import { modifySendFormButton } from '../T3-T4/T3-T4';

import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/dom';

//jest.mock('node-fetch');
global.open = jest.fn();
let triggered = false;

describe('Test for T3-T4', () => {
  beforeAll(async () => {
    document.body.innerHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Revision T3-T4</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
  <style>
    li { margin-top: 0.5em; }
    body {
      margin: 0;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f0f0f0;
      font-family: 'Roboto', sans-serif;
    }
    #loader {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(115, 237, 255, 0.5);
      opacity: 1;
      transition: opacity 1s ease-in-out;
    }
    .bar-container {
      display: flex;
      margin-bottom: 20px;
    }
    .bar {
      width: 10px;
      height: 50px;
      margin: 0 5px;
      background-color: #000078;
      animation: wave 1.5s infinite;
    }
    .bar:nth-child(2) {
      animation-delay: 0.3s;
    }
    .bar:nth-child(3) {
      animation-delay: 0.6s;
    }
    @keyframes wave {
      0%, 40%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
    #loading-text {
      font-size: 18px;
      color: #000078;
    }
    .hidden {
      opacity: 0 !important;
      pointer-events: none;
    }
    form {
      width: 100vh;
      padding: 3%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .divForm {
      margin: 10px;
    }
    #pageNumber {
      margin-right: 5px;
    }
    #sendForm {
      color: #fff;
      background-color: #001f4d;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.3s;
    }
    #sendForm:hover {
      background-color: #003366;
      transform: translateY(-2px);
    }
    #selectContainer {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        background-color: #ddd; /* Color de fondo de ejemplo */
      }
  </style>
</head>
<body>
  <div id="loader" class="hidden" data-testid="loader">
    <div class="bar-container">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div id="loading-text" data-testid="loading-text">TEST</div>
  </div>
  <form name="f" id="myContent" action="" data-testid="myContent">
    <div class="divForm">
      <label for="pageNumber">Page number of people:</label>
      <input id="pageNumber"  data-testid="pageNumber" type="number" />
    </div>
	<div id="selectContainer" data-testid="selectContainer"></div>>
      Place your SELECT here
    </div>
    <div class="divForm">
      <button id="sendForm" type="submit"  data-testid="sendForm">SEND FORM!</button>
    </div>
  </form>
</body>
</html>
`;
    await modifyPageNumberInput();
    await modifySendFormButton();
  });
  test('Modifying input value and change event', async () => {
    const pageNumberInput = screen.getByTestId('pageNumber');
    expect(pageNumberInput).toBeInTheDocument();

    const loader = screen.getByTestId('loader');
    const myContentForm = screen.getByTestId('myContent');

    await waitFor(async () => {
      pageNumberInput.value = '5';
      pageNumberInput.dispatchEvent(new Event('change'));

      expect(loader).not.toHaveClass('hidden');
      expect(myContentForm).toHaveClass('hidden');
    });
    await new Promise((resolve) => {
      setTimeout(() => {
        expect(loader).toHaveClass('hidden');
        triggered = true;
        resolve();
      }, 6000);
    });
  });
  test('Loader should has loading... at textContext after load', () => {
    expect(triggered).not.toBeFalsy();
    expect(screen.getByTestId('loading-text')).toHaveTextContent('loading...');
  });
  test('Loader should be hidden after load', () => {
    expect(triggered).not.toBeFalsy();
    expect(loader).toHaveClass('hidden');
  });
  test('myContent should be visible after load', () => {
    expect(triggered).not.toBeFalsy();
    expect(screen.getByTestId('myContent')).not.toHaveClass('hidden');
  });
  test('selectContainer should contain a select element', () => {
    expect(
      screen.getByTestId('selectContainer').querySelector('select')
    ).toBeInTheDocument();
  });
  test('Form action is not correctly changed', () => {
    screen
      .getByTestId('selectContainer')
      .querySelector('select').selectedIndex = 4;
    screen
      .getByTestId('selectContainer')
      .querySelector('select')
      .dispatchEvent(new Event('change'));

    expect(
      screen.getByTestId('selectContainer').querySelector('select').value
    ).not.toBeNull();
    expect(screen.getByTestId('myContent').action).not.toBeNull();
    expect(
      screen.getByTestId('selectContainer').querySelector('select').value
    ).toEqual(screen.getByTestId('myContent').action);
  });
  test('Default action should be prevented for sendForm button', () => {
    const sendFormButton = screen.getByTestId('sendForm');
    const clickEvent = new Event('click', { bubbles: true, cancelable: true });
    sendFormButton.dispatchEvent(clickEvent);
    expect(clickEvent.defaultPrevented).toBe(true);
  });
});
