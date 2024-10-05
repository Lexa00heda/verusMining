class Mine{
    inputField = document.getElementById("noVNC_container").getElementsByTagName("canvas")[0];
    accounts = []
    constructor(){
        this.inputField.focus();
    }
     simulateKeyPress(element, key) {
        function isUpperCase(str){
            if(str === str.toUpperCase() && (/[a-zA-Z]/).test(str)){
                return true
            }
        };
    
        if(key == '@' || key == '+' || key == '&' ||key == '>' ||  key == ':' || key == '|' || isUpperCase(key)){
            let shift=true
            const keydownEvent = new KeyboardEvent('keydown', {
                key: key,
                code: key === 'A' ? 'KeyA' : key, // Use 'KeyA' for the letter 'A'
                keyCode: key.charCodeAt(0), // Get the character code
                shiftKey: shift, // Specify if Shift is pressed
                bubbles: true,
                cancelable: true
            });
        
            // Dispatch the keydown event
            element.dispatchEvent(keydownEvent);
        
            // If Shift is pressed, simulate the key event
            if (shift) {
                const shiftEvent = new KeyboardEvent('keydown', {
                    key: 'Shift',
                    code: 'ShiftLeft', // or 'ShiftRight' for right Shift
                    keyCode: 16,
                    bubbles: true,
                    cancelable: true
                });
        
                // Dispatch the Shift key event
                element.dispatchEvent(shiftEvent);
            }
        
            // Dispatch keyup events
            const keyupEvent = new KeyboardEvent('keyup', {
                key: key,
                code: key === 'A' ? 'KeyA' : key,
                keyCode: key.charCodeAt(0),
                bubbles: true,
                cancelable: true
            });
            element.dispatchEvent(keyupEvent);
        
            if (shift) {
                const shiftKeyUpEvent = new KeyboardEvent('keyup', {
                    key: 'Shift',
                    code: 'ShiftLeft',
                    keyCode: 16,
                    bubbles: true,
                    cancelable: true
                });
                element.dispatchEvent(shiftKeyUpEvent);
            }
            return
        }
        // console.log(key)
        const eventOptions = {
            key: key,
            char: key,
            keyCode: key === 'Enter' ? 13 : key.charCodeAt(0),
            bubbles: true,
            cancelable: true,
        };
    
        // Create and dispatch the keydown event
        const keydownEvent = new KeyboardEvent('keydown', eventOptions);
        element.dispatchEvent(keydownEvent);
    
        // Trigger input event to notify of changes
        const inputEvent = new Event('input', { bubbles: true });
        element.dispatchEvent(inputEvent);
    
        // Create and dispatch the keyup event
        const keyupEvent = new KeyboardEvent('keyup', eventOptions);
        element.dispatchEvent(keyupEvent);
    }
    
     sentText(textToSend){
        for (let char of textToSend) {
        if (char === '\n') {
            this.simulateKeyPress(this.inputField, 'Enter'); // Simulate pressing Enter for newline
        } else {
            this.simulateKeyPress(this.inputField, char);
        }
    }
    }
    show(){
        console.log("1: Rdp initialization\n2: Selenium\n3:Account\n4:Termux\n5:Mine")
    }
    allRound(types,acc=1){
            if(types==1){
                this.sentText("wget https://github.com/Lexa00heda/verusMining/raw/refs/heads/main/rdpSetup.sh\nchmod +x rdpSetup.sh\n./rdpSetup.sh\n")
            }else if(types==2){
                this.sentText("python3 sele.py\n")
            }else if(types==3){
                this.sentText(this.accounts[acc-1])
            }else if(types==4){
                this.sentText("adb install termux.apk\nadb shell monkey -p com.termux -v 500\n")
            }else if(types==5){
                this.sentText("yes | pkg install tmux\ntmux\nmkdir verusMining\ncd verusMining\nyes | pkg install wget\nwget https://github.com/Lexa00heda/verusMining/raw/refs/heads/main/config.json\nwget https://github.com/Lexa00heda/verusMining/raw/refs/heads/main/ccminer\nwget https://github.com/Lexa00heda/verusMining/raw/refs/heads/main/start.sh\nwget https://github.com/Lexa00heda/verusMining/raw/refs/heads/main/install.sh \nchmod +x install.sh \nyes |nohup ./install.sh  /dev/null  ./logFile 2>&1 &\n")
            }
    }
}
const mine = new Mine();
