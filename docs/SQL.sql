

-- 用户表
CREATE TABLE `oauth-server`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `gender` INT NOT NULL,
  `age` INT NOT NULL,
  `is_active` INT NOT NULL,
  `create_dt` INT NOT NULL,
  `update_dt` INT NOT NULL,
  PRIMARY KEY (`id`));

-- 开发者用户表
  CREATE TABLE `oauth-server`.`developer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_active` INT NOT NULL,
  `create_dt` INT NOT NULL,
  `update_dt` INT NOT NULL,
  PRIMARY KEY (`id`));

-- 应用表
CREATE TABLE `oauth-server`.`application` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `app_name` VARCHAR(45) NOT NULL,
  `app_key` VARCHAR(255) NOT NULL,
  `app_home` VARCHAR(45) NOT NULL,
  `secret` VARCHAR(255) NOT NULL,
  `app_icon` VARCHAR(45) NOT NULL,
  `create_dt` INT NOT NULL,
  `update_dt` INT NOT NULL,
  `create_by` INT NOT NULL,
  PRIMARY KEY (`id`));

-- 临时授权码
  CREATE TABLE `oauth-server`.`code` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `app_id` INT NOT NULL,
  `scope` VARCHAR(45) NOT NULL,
  `redirect_url` VARCHAR(45) NOT NULL,
  `code` VARCHAR(45) NOT NULL,
  `create_dt` VARCHAR(45) NOT NULL,
  `update_dt` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `oauth-server`.`token` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `access_token` VARCHAR(45) NOT NULL,
  `refresh_token` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  `create_dt` INT NOT NULL,
  `update_dt` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `oauth-server`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);