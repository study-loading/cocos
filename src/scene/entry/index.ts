/*
 * @Description:
 * @Author: WangYong
 * @Date: 2021-01-31 03:17:42
 * @LastEditor: WangYong
 * @LastEditTime: 2021-01-31 03:27:54
 */
import cc from 'cocos'
import HelloWorldPng from 'static/HelloWorld.png'

let Entry = cc.Scene.extend({
  onEnter: function() {
    this._super()
    let size = cc.director.getWinSize()
    let sprite = cc.Sprite.create(HelloWorldPng)
    sprite.setPosition(size.width / 2, size.height / 2)
    sprite.setScale(0.8)
    this.addChild(sprite, 0)

    let label = cc.LabelTTF.create('COCOS GAMES', 'Arial', 40)
    label.setPosition(size.width / 2, size.height / 2)
    this.addChild(label, 1)
  },
})

export default Entry
