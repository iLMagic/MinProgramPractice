
1、掌握弹性盒子布局（Flex布局）
~~~scss
  /* 
  1、margin可以为负值，padding不可以
  */
.container {
  display: flex; 
  flex-direction: column; //盒子排列方向
  margin: 10rpx 20rpx 30rpx 40rpx; //上右下左
  align-items: center;
  justify-content: flex-start;
}
~~~

2、rpx与px的区别？
  
* rpx可以做到自动适配、
* rpx实际上就是系统级的rem（把页面按比例分割750份，1rpx=window.innerWidth/750），或者scale伸缩布局的width=750。
* 可参考：https://www.jianshu.com/p/191d1e21f7ed

3、
