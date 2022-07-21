const deepClone=(obj, cache)=>{
    if(!obj){return}
    if(!cache){
        cache = new Map();
    }
    let result;

    // if(!cache.get(obj)){
    //     cache.set(obj, result)
    // }// ???????????
    if(cache.get(obj)){
        return cache.get(obj)
    }// ???????????


    if(obj instanceof Object  ){
        // Array Function Date RegExp
        if(obj instanceof Function){

            if(obj.prototype){
                result = obj.apply(result, arguments);
            }else{
                result = (...arg)=> obj.call(undefined, ...arg);
            }
        }else if(obj instanceof Array){
            result = []
        }else if(obj instanceof Date){
            result = new Date(obj - 0)

        }else if(obj instanceof RegExp){
            result = new RegExp(obj.source, obj.flags)   //?????????????
        }else{
            result = {}
        }
        cache.set(obj, result)
        for(let key in obj){
            if(obj.hasOwnProperty(key)) result[key] = deepClone(obj[key], cache);
        }

    }else{
        result = obj;
    }
    return result
}

手写数组去重
const arr= [1,3,1,4,5,6,1, ,, ,3,4,56,333,2,2,2,2]


function uniq(){
    let map = new Map



    for(let key in arr){
        if(arr[key] === undefined){continue}
        if(!map.get(arr[key])){
            map.set(arr[key], arr[key])
        }
    }
    return [...map.values()]
}


console.log(uniq(arr))

// 11. 常考：如何用正则实现 trim()？
string = "  adkfjka  adjfkfjk    "

arr2 = string.replace(/^\s+|\s+$/g, '')
console.log(arr2)

String.prototype.trim = function(){
    return this.replace(/^\s+|\s+$/g, '')
}
//或者 
function trim(string){
    return string.replace(/^\s+|\s+$/g, '')
}


class Animal{
    constructor(color){
        this.color =color
    }
}

class Dog extends Animal{
    constructor(color, name){
        super(color)
        this.name =name
    }
    sayHai(){
        console.log(this.name+' de clolor:' + this.color)
    }
}

a = new Dog('red', 'heheda')
a.sayHai()

function Animal(color){
    this.color = color

}
Animal.prototype.move = function (){

}


function Dog(color, name){
    Animal.call(this,color)
    this.name = name 

}

function temp (){}
temp.prototype = Animal.prototype;
Dog.prototype = new temp();



Dog.prototype.constructor = Dog

Dog.prototype.sayHai =  function (){
    console.log('汪')
}
var dog = new Dog('黄色','阿fdgh')

Element.addListener('click', (e)=>{
    if(e.target.toLower() === 'li'){
        console.log('click li element')
    }
})

function delegate (element, eventType, selector, fn){
    element.addEventListener(eventType, (e)=>{
        let el = e.target;
        while(!el.matches(selector)){
            if(el === element){
                el = null
                break
            }else{
                el = el.parentNode
            }
        }
        el && fn.call(el, e, el) 
    })
    return element
}
delete(ul, 'click', 'li', f1)


//  element
let canMove = false;
let position = null;
let element = document.querySelector('#xxx')

document.addEventListener('mousedown',function (e){
    canMove = true;
    position = [e.clientX, e.clientY]
    console.log(position)
})

document.addEventListener('mousemove',function (e){
    if(!canMove){return  }

    currentPosition = [e.clientX, e.clientY]
    detaX = currentPosition[0] - position[0]
    detaY = currentPosition[1] - position[1]
    element.style.left = parseInt(element.style.left || '0') +  detaX + 'px'
    element.style.top = parseInt(element.style.top || '0') + detaY + 'px'
    position = currentPosition;

})

document.addEventListener('mouseup',function (e){
    canMove = false;
})












function render(vdom) { // 如果是字符串或者数字，创建一个文本节点
    if(typeof vdom === 'string' || typeof vdom === 'number') { 
        return document.createTextNode(vdom) 
    }
    const { tag, props, children } = vdom
    // 创建真实DOM const element = document.createElement(tag) // 设置属性
    setProps(element, props) 
    // 遍历子节点，并获取创建真实DOM，插入到当前节点
    children.map(render).forEach(element.appendChild.bind(element)) 
    // 虚拟 DOM 中缓存真实 DOM 节点
    vdom.dom = element 
    // 返回 DOM 节点 
    return element 
} 

function setProps 
 // 略 function setProp // 略 
 // 作者：Shenfq // 链接：https://juejin.cn/post/6844903870229905422

 import { useEffect,useState,useRef } from "react";
 import "./styles.css";
 export default function App() {
      const [visible, setNextVisible] = useState(true)
      const onClick = ()=>{ setNextVisible(!visible) }
      return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
            {visible ? <Frank/> : null} 
            <div> <button onClick={onClick}>toggle</button> </div>
            </div> 
        ); 
    }
function Frank(props){
    const [n, setNextN] = useState(0)
    const first = useRef(true)
    useEffect(()=>{ 
        if(first.current === true ){ return }
        console.log('did update') 
    })
    useEffect(()=>{
        console.log('did mount')
        first.current = false
        return ()=>{ console.log('did unmount') } 
    }, [])
    const onClick = ()=>{ setNextN(n+1) } 
    return ( <div>Frank <button onClick={onClick}>+1</button> </div> ) 
}
 


const eventHub = { 
    map: { // click: [f1 , f2] 

    }, 
    on: (name, fn)=>{
        eventHub.map[name] = eventHub.map[name] || [] 
        eventHub.map[name].push(fn)
    },
    emit: (name, data)=>{ 
        const q = eventHub.map[name] 
        if(!q)  return
        q.map(f => f.call(null, data)) 
        return undefined 
    }, 
    off: (name, fn)=>{
        const q = eventHub.map[name]
        if(!q){ return }
        const index = q.indexOf(fn)
        if(index < 0) { return }
        q.splice(index, 1)
    }
}
    eventHub.on('click', console.log)
    eventHub.on('click', console.error)
    setTimeout(()=>{
         eventHub.emit('click', 'frank')
    },3000)

class EventHub {
    map = {}
    on(name, fn) {
        this.map[name] = this.map[name] || []
        this.map[name].push(fn) 
    }
    emit(name, data) {
        const fnList = this.map[name] || []
        fnList.forEach(fn => fn.call(undefined, data))
    }
    off(name, fn) {
        const fnList = this.map[name] || [] 
        const index = fnList.indexOf(fn) 
        if(index < 0) return
        fnList.splice(index, 1) 
    } 
} 
// 使用
const e = new EventHub()
e.on('click', (name)=>{ console.log('hi '+ name) })
e.on('click', (name)=>{ console.log('hello '+ name) })
setTimeout(()=>{
    e.emit('click', 'frank')
},3000)
        








HTML5 
//文章
article nav aside header footer main 
// 视频
canvas video audio
// 图片
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
