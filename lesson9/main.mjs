import Gadget from "./gadget.mjs";
import Smartphone from "./smartphone.mjs";


const samsung = new Gadget("Samsung", "A24", 2025)
const iphone = new Gadget("Iphone", "13 Pro Max", 2023)
const samsung1 = new Smartphone("Samsung", "A24", 2024, "Android");
const iphone1 = new Smartphone("iPhone", "13 Pro Max", 2023, "iOS");
const windows = new Smartphone("Windows", "32", 2020, "Windows")

samsung.getInfo()
samsung.year = 2015;
iphone.year = 1995;

windows.operatingSystem = "Linux";   
windows.operatingSystem = "HarmonyOS";   

const gadgets = [samsung, iphone, samsung1, iphone1, windows];
const oldestGadget = Gadget.getOldestGadget(gadgets);
oldestGadget.getInfo()
