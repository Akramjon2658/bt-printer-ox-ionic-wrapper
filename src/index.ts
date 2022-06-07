/**
 * This is a bluetooth printer plugin wrapper
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';

/**
 * @name B T Printer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BTPrinter } from '@awesome-cordova-plugins/bt-printer';
 *
 *
 * constructor(private bTPrinter: BTPrinter) { }
 *
 * ...
 *
 *
 * this.bTPrinter.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */

type SimpleFunction = (...args: any[]) => any;

@Plugin({
  pluginName: 'BTPrinter',
  plugin: 'cordova-plugin-btprinter-ox', // npm package name, example: cordova-plugin-camera
  pluginRef: 'navigator.btPrinter', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/Akramjon2658/Cordova-Plugin-BTPrinter', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class BTPrinter extends AwesomeCordovaNativePlugin {

  /**
   * This function does something
   * @param fnSuccess {function} Success callback
   * @param fnError {function} Error callback
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  status(fnSuccess: SimpleFunction, fnError: SimpleFunction): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  list(fnSuccess: SimpleFunction, fnError: SimpleFunction): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  connect(fnSuccess: SimpleFunction, fnError: SimpleFunction, name: string): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  connected(fnSuccess: SimpleFunction, fnError: SimpleFunction): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  disconnect(fnSuccess: SimpleFunction, fnError: SimpleFunction): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  setEncoding(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printText(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printTextSizeAlign(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string, size: string | number, align: string): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printTitle(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string, size: string | number, align: string): Promise<string[]> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printImageUrl(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string, align: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printBase64(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string, align: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printPOSCommand(fnSuccess: SimpleFunction, fnError: SimpleFunction, str: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printQRCode(fnSuccess: SimpleFunction, fnError: SimpleFunction, data: any, align: string, model: string, size: number | string, eclevel: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  @Cordova()
  printBarcode(fnSuccess: SimpleFunction, fnError: SimpleFunction, system: any, data: any, align: string, position: any, font: any, height: string | number): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }
}
