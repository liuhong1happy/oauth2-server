

<!-- TOC -->

- [Web接口设计](#web接口设计)
    - [1.1 用户登录](#11-用户登录)
    - [1.2 用户注册](#12-用户注册)
    - [1.3 用户忘记密码](#13-用户忘记密码)
    - [1.4 验证授权令牌](#14-验证授权令牌)
    - [1.5 用户重置密码](#15-用户重置密码)
    - [2.1 开发者登录](#21-开发者登录)
    - [2.2 开发者注册](#22-开发者注册)
    - [2.3 开发者忘记密码](#23-开发者忘记密码)
    - [2.4 验证授权令牌](#24-验证授权令牌)
    - [2.5 开发者重置密码](#25-开发者重置密码)
    - [3.1 应用新建](#31-应用新建)
    - [3.2 应用删除](#32-应用删除)
    - [3.3 应用修改](#33-应用修改)
    - [3.4 应用查询列表](#34-应用查询列表)
    - [3.5 更新应用密钥](#35-更新应用密钥)
    - [4.1 认证服务登录](#41-认证服务登录)
    - [4.2 用户确认授权 - 获取授权码](#42-用户确认授权---获取授权码)
    - [4.3 开发者获取令牌 - 获取访问令牌](#43-开发者获取令牌---获取访问令牌)
    - [4.4 获取用户授权信息](#44-获取用户授权信息)
    - [4.5 刷新令牌](#45-刷新令牌)
    - [5.1 文件上传](#51-文件上传)

<!-- /TOC -->

# Web接口设计

## 1.1 用户登录

`POST` `／api/user/login`

**Request Body**

- email 邮箱
- password 密码

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - user_id 用户id
    - email 邮箱
    - username 用户名
    - password 密码
    - gender  性别
    - age 年龄

## 1.2 用户注册

`POST` `／api/user/register`

**Request Body**

- email 邮箱
- username 用户名
- password 密码
- gender  性别
- age 年龄

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - user_id 用户id
    - email 邮箱
    - username 用户名
    - password 密码
    - gender  性别
    - age 年龄

## 1.3 用户忘记密码

`POST` `／api/user/forget_passwrod`

**Request Body**

- email 邮箱

**Response Body**

- code 状态
- msg 返回的消息

## 1.4 验证授权令牌

`POST` `／api/user/token`

**Request Body**

- email 邮箱
- token 授权code

**Response Body**

- code 状态
- msg 返回的消息

## 1.5 用户重置密码

`POST` `／api/user/reset_password`

**Request Body**

- email 邮箱
- password 密码

**Response Body**

- code 状态
- msg 返回的消息


## 2.1 开发者登录

`POST` `／api/developer/login`

**Request Body**

- email 邮箱
- password 密码

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - developer_id 用户id
    - email 邮箱
    - username 用户名

## 2.2 开发者注册

`POST` `／api/developer/register`

**Request Body**

- email 邮箱
- username 用户名
- password 密码
- gender  性别
- age 年龄

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - developer_id 用户id
    - email 邮箱
    - username 用户名

## 2.3 开发者忘记密码

`POST` `／api/developer/forget_passwrod`

**Request Body**

- email 邮箱

**Response Body**

- code 状态
- msg 返回的消息

## 2.4 验证授权令牌

`POST` `／api/developer/token`

**Request Body**

- email 邮箱
- token 授权code

**Response Body**

- code 状态
- msg 返回的消息

## 2.5 开发者重置密码

`POST` `／api/developer/reset_password`

**Request Body**

- email 邮箱
- password 密码

**Response Body**

- code 状态
- msg 返回的消息

## 3.1 应用新建

`POST` `／api/developer/application`

**Request Body**

- app_name 应用名称
- app_home 应用官网
- app_icon 应用图标

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - app_id 应用id
    - app_name 应用名称
    - app_home 应用官网
    - app_icon 应用图标
    - app_key 应用key（自动生成，生成后固定）
    - app_secret 应用密钥 （自动生成，生成后可重新生成）

## 3.2 应用删除

`DELETE` `／api/developer/application/:app_id`

**Request Body**

**Response Body**

- code 状态
- msg 返回的消息

## 3.3 应用修改

`PUT` `／api/developer/application/:app_id`

**Request Body**

- type 更新类型，此处为 `BaseInfo`
- app_name 应用名称
- app_home 应用官网
- app_icon 应用图标

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - app_id 应用id
    - app_name 应用名称
    - app_home 应用官网
    - app_icon 应用图标
    - app_key 应用key（自动生成，生成后固定）
    - app_secret 应用密钥 （自动生成，生成后可重新生成）

## 3.4 应用查询列表

`GET` `／api/developer/application`


**Request Body**

- app_name 应用名称
- page 页数
- page_size 每页数量

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - list 获取的列表
        - app_id 应用id
        - app_name 应用名称
        - app_home 应用官网
        - app_icon 应用图标
        - app_key 应用key（自动生成，生成后固定）
        - app_secret 应用密钥 （自动生成，生成后可重新生成）
    - total 总数

## 3.5 更新应用密钥

`PUT` `／api/developer/application/:app_id`

**Request Body**

- type 更新类型，此处为 `AppSecret`
- app_secret 原来的密钥

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - app_id 应用id
    - app_name 应用名称
    - app_home 应用官网
    - app_icon 应用图标
    - app_key 应用key（自动生成，生成后固定）
    - app_secret 应用密钥 （自动生成，生成后可重新生成）

## 4.1 认证服务登录

`POST` `／api/oauth2/login/:app_key`

**Request Body**

- email 邮箱
- password 密码

**Response Body**

- code 状态
- msg 返回的消息

## 4.2 用户确认授权 - 获取授权码

`GET` `／api/oauth2/authorize`

**Request Body**

- response_type 授权类型
- app_key 应用key
- scope 获取用户信息的域
- redirect_url 成功后的回调地址

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - code 授权码

## 4.3 开发者获取令牌 - 获取访问令牌

`GET` `／api/oauth2/token`

**Request Body**

- app_key 应用key
- app_secret 应用密钥 （自动生成，生成后可重新生成）
- code 授权码
- redirect_url 成功后的回调地址

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - access_token 操作令牌
    - refresh_token 刷新令牌
    - expires_in 过期时间(s)
    - expires_date 过期日期(date)

## 4.4 获取用户授权信息

`POST` `／api/oauth2/user`

**Request Body**

- access_token 操作令牌
- app_key 应用key

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - openid 对外唯一id
    - email 邮箱
    - username 用户名
    - gender  性别
    - age 年龄

## 4.5 刷新令牌

`POST` `／api/oauth2/refresh_token`

**Request Body**

- app_key 应用key
- refresh_token 应用密钥 （自动生成，生成后可重新生成）

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - access_token 操作令牌
    - refresh_token 刷新令牌
    - expires_in 过期时间(s)
    - expires_date 过期日期(date)

## 5.1 文件上传

`POST` `／api/common/upload`

**Request Body**

- file 文件

**Response Body**

- code 状态
- msg 返回的消息
- data 返回的数据
    - file_name 文件名称
    - file_md5 文件md5
    - file_size 文件大小
    - img_width 图片宽度
    - img_height 图片高度