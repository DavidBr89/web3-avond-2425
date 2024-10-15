// Default named import
import defaultImport, { str, obj, arr } from "./index";

import { Button, CheckBox } from "./index";

// import { str, obj, arr } from "./index";

defaultImport();

console.log(str);
obj.aFn();
arr.push("test");
