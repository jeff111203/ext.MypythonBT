
//% color="#AA278D" iconWidth=50 iconHeight=40
namespace MypythonBT{
    //% block="MypythonBT init name[NAME]" blockType="comman"
    //% BUTTON.shadow="string" NAME.defl="esp32BT"
    export function MypythonBTInit(parameter: any, block: any) {
        let name=parameter.NAME.code;
        console.log(name);
        Generator.addInclude('MypythonBTInitinclude', '#include <BluetoothSerial.h>');
        Generator.addObject("MypythonBTInitobject", "BluetoothSerial", "SerialBT");
        Generator.addSetup("MypythonBTInitsetup", `SerialBT.begin(${name});`);
    }

//% block="MypythonBT available?" blockType="boolean"
export function MypythonBTInitavAilable(parameter: any, block: any) {

    Generator.addCode(["SerialBT.available()",Generator.ORDER_UNARY_POSTFIX]);
 }


//% block="MypythonBT read" blockType="reporter"
export function MypythonBTInitRead(parameter: any, block: any) {

    Generator.addCode(["SerialBT.read()",Generator.ORDER_UNARY_POSTFIX]);
}
//% block="MypythonBT write[STR]" blockType="command"
//% STR.shadow="number" STR.defl="1"
export function MypythonBTInitWrite(parameter: any, block: any) {
        let str = parameter.STR.code;
    Generator.addCode(`SerialBT.write(${str});`);
}
    
}
