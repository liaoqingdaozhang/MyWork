package com.jwj.dao;

import com.jwj.entity.Moneyrecord;
import com.jwj.entity.MoneyrecordExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MoneyrecordMapper {
    int countByExample(MoneyrecordExample example);

    int deleteByExample(MoneyrecordExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Moneyrecord record);

    int insertSelective(Moneyrecord record);

    List<Moneyrecord> selectByExample(MoneyrecordExample example);

    Moneyrecord selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Moneyrecord record, @Param("example") MoneyrecordExample example);

    int updateByExample(@Param("record") Moneyrecord record, @Param("example") MoneyrecordExample example);

    int updateByPrimaryKeySelective(Moneyrecord record);

    int updateByPrimaryKey(Moneyrecord record);
}