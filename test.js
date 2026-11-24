'use strict';
const assert=require('node:assert/strict');const {buildPrompt}=require('./prompts.js');
assert.throws(()=>buildPrompt({idea:'  '}),/required/);
let image=buildPrompt({idea:'قطة',type:'image',safe:true,audio:'موسيقى'});assert.match(image,/قطة/);assert.match(image,/مناسب للعائلة/);assert.doesNotMatch(image,/موسيقى|المدة/);
let video=buildPrompt({idea:'A garden',type:'video',language:'en',duration:15,audio:'Birdsong',ratio:'16:9'});assert.match(video,/Duration: 15 seconds/);assert.match(video,/Audio: Birdsong/);assert.match(video,/16:9/);assert.doesNotMatch(video,/Family-friendly/);
let story=buildPrompt({idea:'طفل',type:'story',duration:999,ratio:'bad',style:'toString'});assert.match(story,/قصة كرتونية/);assert.match(story,/10 ثانية/);assert.match(story,/9:16/);assert.match(story,/سينمائي/);console.log('All prompt tests passed.');
