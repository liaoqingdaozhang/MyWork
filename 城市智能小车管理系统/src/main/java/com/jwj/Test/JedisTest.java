package com.jwj.Test;

import redis.clients.jedis.Jedis;

import java.util.ArrayList;
import java.util.List;

public class JedisTest {
    @org.junit.Test
    public void test(){
        //1.获取连接
        Jedis jedis=new Jedis("localhost",6379);
        //2.操作
        jedis.set("username","zhangsan");
        //3.关闭连接
        jedis.close();
    }
}


































