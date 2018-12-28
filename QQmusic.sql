SET NAMES UTF8;
DROP DATABASE IF EXISTS qqmusic;
CREATE DATABASE qqmusic CHARSET=UTF8;
USE qqmusic;

#用户表
CREATE TABLE qqmusic_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(8),
    upwd VARCHAR(16)
);
INSERT INTO qqmusic_user VALUES(null,"杨帆",md5("123456"));
INSERT INTO qqmusic_user VALUES(null,"刘星宇",md5("123456"));
INSERT INTO qqmusic_user VALUES(null,"田园子",md5("123456"));
INSERT INTO qqmusic_user VALUES(null,"李丹阳",md5("123456"));
INSERT INTO qqmusic_user VALUES(null,"刘媛",md5("123456"));
#歌单表
CREATE TABLE qqmusic_menu(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(32),
    autor VARCHAR(8),
    lgImg_url VARCHAR(255),
    mdImg_url VARCHAR(255),
    smImg_url VARCHAR(255),
    ctime VARCHAR(255)
);

INSERT INTO qqmusic_menu VALUES(null,"倒数","邓紫棋","http://127.0.0.1:3000/img/T015R640x360M101003z3iMe2trR6A.jpg","","",now());
 INSERT INTO qqmusic_menu VALUES(null,"倒数","邓紫棋","http://127.0.0.1:3000/img/T015R640x360M101003z3iMe2trR6A.jpg","","",now());
 INSERT INTO qqmusic_menu VALUES(null,"倒数","邓紫棋","http://127.0.0.1:3000/img/T015R640x360M101003z3iMe2trR6A.jpg","","",now());
 INSERT INTO qqmusic_menu VALUES(null,"倒数","邓紫棋","http://127.0.0.1:3000/img/T015R640x360M101003z3iMe2trR6A.jpg","","",now());
 INSERT INTO qqmusic_menu VALUES(null,"倒数","邓紫棋","http://127.0.0.1:3000/img/T015R640x360M101003z3iMe2trR6A.jpg","","",now());