// Assuming you have already done "npm install fernet"
let fernet = require('fernet')
let secret = new fernet.Secret('TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM=')
// Oh no! The code is going over the edge! What are you going to do?
let message = 'gAAAAABcD2Wxer1MP0EzJmJTf07xCB' + 
  '_52qYz8NvSwpL8Q1ISH83-WSX0tUgtG8WvWohDe776' +
  'qnZoOlSZK5o0_Z7ukVAV_FlGAFI0euz77ij5T4O78p' +
  'LDoFoBz8h93TZvhzWSzfAi_k2XBqda4Vsz1t5WZrcz' +
  '1zsdcpyjcoFIBKIMCSeI02I8L6VeDlxFCeUUr0zgrie9oCfC'
let token = new fernet.Token({secret: secret, token: message, ttl:0})
token.decode()
console.log(token.message)