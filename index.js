#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { cursorMove, cursorForward } from 'ansi-escapes';

const logo = String.raw
`  ___________________
 /                   |
|    ____________    |
|___|            |   |
            _____|___|_______
           /                 \
           |    ___________    |
  ___      |   |  |   |    |___|
 |   |_____|   |__|   |
 |         |   |      |
 |_________|   |______|
           |   |            ____
           |   |___________|    |
           |                    |
           \___________________/`;


const lines = logo.split('\n');

const offset = Math.max(...lines.map(line => line.length));
console.log(chalk.bold.white(logo));

const full_name = trim(figlet.textSync('Jakub Jankiewicz', { font: 'Small Slant' }));

console.log(position(chalk.bold.blue(full_name), { x: 25, y: -15 }));
console.log('');

const n = chalk.bold.yellow;
const w = chalk.bold.white;
const b = chalk.bold.blue;


console.log(position(`
${n('name')}: ${w('Jakub T. Jankiewicz')}
${n('github')}: ${w('@jcubic')}
${n('twitter')}: ${w('@jcubic')}
${n('porfolio')}: ${b('https://jcu.bi/')}
`, { x: 35, y: -12 }));

function trim(str) {
    return str.replace(/\s+$/, '');
}

function position(str, { x, y }) {
    const lines = str.split('\n');
    const text = lines.map(line => {
        return cursorForward(x) + line;
    }).join('\n');
    return  cursorMove(0, y) + text + cursorMove(0, (y * -1) - lines.length);
}

function print(str) {
    process.stdout.write(str);
}
