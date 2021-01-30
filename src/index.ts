/*
 * @Description:
 * @Author: WangYong
 * @Date: 2021-01-30 23:16:33
 * @LastEditor: WangYong
 * @LastEditTime: 2021-01-31 03:27:17
 */
import cc from 'cocos'
import Entry from 'scene/entry'
import HelloWorldPng from 'static/HelloWorld.png'

window.onload = function() {
  cc.game.onStart = function() {
    console.log('HelloWorldPng')
    cc.LoaderScene.preload([HelloWorldPng], function() {
      cc.director.runScene(new Entry())
    })
  }
  cc.game.run('gameCanvas')
}
