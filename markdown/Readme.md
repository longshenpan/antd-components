### &nbsp &nbsp keyfe-components组件库基于蚂蚁金服的Ant Design设计系统开发，根据UED的设计规范将客如云的React基础组件分为下面几类:

- #### 基于Ant Design的变量覆盖组件
<font size='3'>针对这类组件，在kryfe-style的index.js中对同名的Ant变量进行了覆盖，因此开发者只需要在项目引入kryfe-components和kryfe-style即可
</font>

- #### 基于Ant Design的样式覆盖
<font size='3'>一些组件无法通过简单的变量覆盖方式达到UED的设计效果，因此需要通过样式覆盖方式实现，在keyfe-style库中index.less引入了相关实现。开发者为了使用新的组件样式，需要对基础组件添加额外的class名称
</font>  

- #### 自定义组件
<font size='3'>这些组件在Ant Design基础组件之上自定义了一些行为和外观，其使用方式可参考自定义组件案例
</font>  

- #### 其他组件
<font size='3'>凡是没有出现在该静态站点的组件都按照Ant design的组件使用方式使用</font>  

&nbsp <font color='red' size='4'>说明：在项目中引入kryfe-components库和keyfe-style库，以及包含Webpack配置的kryfe-tools库</font>
