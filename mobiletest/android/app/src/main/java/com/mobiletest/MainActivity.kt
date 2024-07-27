package com.eden.app

import android.content.Intent
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "mobiletest"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flag [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  var isOnNewIntent: Boolean = false

  fun FullScreenPropsEmitter(intent: Intent) {
    val main = intent.getStringExtra("String_I_need")
    val map: WritableMap = Arguments.createMap()
    map.putString("props", main)
    try {
      getReactInstanceManager().currentReactContext?.getJSModule(
        DeviceEventManagerModule.RCTDeviceEventEmitter::class.java
      )?.emit("notificationHandle", map)
    } catch (e: Exception) {
      Log.e("Testing", "Error: " + e.message)
    }
  }

  override fun onStart() {
    super.onStart()
    FullScreenPropsEmitter(intent)
  }
}