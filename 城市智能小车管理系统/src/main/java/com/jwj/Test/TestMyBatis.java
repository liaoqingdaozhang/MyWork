package com.jwj.Test;

import com.jwj.dao.CarMapper;
import com.jwj.entity.Car;
import com.jwj.entity.CarExample;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.InputStream;
import java.util.List;

public class TestMyBatis {

    //    测试查询
    @Test
    public void run1()throws Exception{
//        加载配置文件
        InputStream in= Resources.getResourceAsStream("SqlMapConfig.xml");
//        创建SqlSessionFactory对象
        SqlSessionFactory factory=new SqlSessionFactoryBuilder().build(in);
//        创建SqlSession对象
        SqlSession sqlSession=factory.openSession();
//        获取到代理对象
        CarMapper dao=sqlSession.getMapper(CarMapper.class);
//        查询所有数据
        CarExample carExample=new CarExample();
        CarExample.Criteria criteria = carExample.createCriteria();
        carExample.setDistinct(false);
        List<Car> cars = dao.selectByExample(carExample);
        System.out.println(cars);
        for (Car a:cars
        ) {
            System.out.println(a);
        }
//        关闭资源
        sqlSession.close();
        in.close();
    }
}
