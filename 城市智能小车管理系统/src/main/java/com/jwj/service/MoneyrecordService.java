package com.jwj.service;

import com.jwj.entity.IntList;
import com.jwj.entity.Moneyrecord;
import com.jwj.entity.MoneyrecordExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MoneyrecordService {
    int countByExample(MoneyrecordExample example);

    int deleteByExample(MoneyrecordExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Moneyrecord record);

    int insertSelective(Moneyrecord record);

    List<Moneyrecord> selectByExample();

    Moneyrecord selectByPrimaryKey(Integer id);

    List<Moneyrecord> selectByCarId(Integer carId);

    List<Moneyrecord> selectByListCarId(IntList intList);

    int updateByExampleSelective(@Param("record") Moneyrecord record, @Param("example") MoneyrecordExample example);

    int updateByExample(@Param("record") Moneyrecord record, @Param("example") MoneyrecordExample example);

    int updateByPrimaryKeySelective(Moneyrecord record);

    int updateByPrimaryKey(Moneyrecord record);
}
