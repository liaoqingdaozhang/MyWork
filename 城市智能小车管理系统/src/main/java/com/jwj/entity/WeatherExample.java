package com.jwj.entity;

import java.util.ArrayList;
import java.util.List;

public class WeatherExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public WeatherExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andWeathertimeIsNull() {
            addCriterion("weathertime is null");
            return (Criteria) this;
        }

        public Criteria andWeathertimeIsNotNull() {
            addCriterion("weathertime is not null");
            return (Criteria) this;
        }

        public Criteria andWeathertimeEqualTo(String value) {
            addCriterion("weathertime =", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeNotEqualTo(String value) {
            addCriterion("weathertime <>", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeGreaterThan(String value) {
            addCriterion("weathertime >", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeGreaterThanOrEqualTo(String value) {
            addCriterion("weathertime >=", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeLessThan(String value) {
            addCriterion("weathertime <", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeLessThanOrEqualTo(String value) {
            addCriterion("weathertime <=", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeLike(String value) {
            addCriterion("weathertime like", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeNotLike(String value) {
            addCriterion("weathertime not like", value, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeIn(List<String> values) {
            addCriterion("weathertime in", values, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeNotIn(List<String> values) {
            addCriterion("weathertime not in", values, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeBetween(String value1, String value2) {
            addCriterion("weathertime between", value1, value2, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertimeNotBetween(String value1, String value2) {
            addCriterion("weathertime not between", value1, value2, "weathertime");
            return (Criteria) this;
        }

        public Criteria andWeathertypeIsNull() {
            addCriterion("weathertype is null");
            return (Criteria) this;
        }

        public Criteria andWeathertypeIsNotNull() {
            addCriterion("weathertype is not null");
            return (Criteria) this;
        }

        public Criteria andWeathertypeEqualTo(String value) {
            addCriterion("weathertype =", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeNotEqualTo(String value) {
            addCriterion("weathertype <>", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeGreaterThan(String value) {
            addCriterion("weathertype >", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeGreaterThanOrEqualTo(String value) {
            addCriterion("weathertype >=", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeLessThan(String value) {
            addCriterion("weathertype <", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeLessThanOrEqualTo(String value) {
            addCriterion("weathertype <=", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeLike(String value) {
            addCriterion("weathertype like", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeNotLike(String value) {
            addCriterion("weathertype not like", value, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeIn(List<String> values) {
            addCriterion("weathertype in", values, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeNotIn(List<String> values) {
            addCriterion("weathertype not in", values, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeBetween(String value1, String value2) {
            addCriterion("weathertype between", value1, value2, "weathertype");
            return (Criteria) this;
        }

        public Criteria andWeathertypeNotBetween(String value1, String value2) {
            addCriterion("weathertype not between", value1, value2, "weathertype");
            return (Criteria) this;
        }

        public Criteria andPm25IsNull() {
            addCriterion("pm2_5 is null");
            return (Criteria) this;
        }

        public Criteria andPm25IsNotNull() {
            addCriterion("pm2_5 is not null");
            return (Criteria) this;
        }

        public Criteria andPm25EqualTo(Integer value) {
            addCriterion("pm2_5 =", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25NotEqualTo(Integer value) {
            addCriterion("pm2_5 <>", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25GreaterThan(Integer value) {
            addCriterion("pm2_5 >", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25GreaterThanOrEqualTo(Integer value) {
            addCriterion("pm2_5 >=", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25LessThan(Integer value) {
            addCriterion("pm2_5 <", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25LessThanOrEqualTo(Integer value) {
            addCriterion("pm2_5 <=", value, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25In(List<Integer> values) {
            addCriterion("pm2_5 in", values, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25NotIn(List<Integer> values) {
            addCriterion("pm2_5 not in", values, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25Between(Integer value1, Integer value2) {
            addCriterion("pm2_5 between", value1, value2, "pm25");
            return (Criteria) this;
        }

        public Criteria andPm25NotBetween(Integer value1, Integer value2) {
            addCriterion("pm2_5 not between", value1, value2, "pm25");
            return (Criteria) this;
        }

        public Criteria andCo2IsNull() {
            addCriterion("co2 is null");
            return (Criteria) this;
        }

        public Criteria andCo2IsNotNull() {
            addCriterion("co2 is not null");
            return (Criteria) this;
        }

        public Criteria andCo2EqualTo(Integer value) {
            addCriterion("co2 =", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2NotEqualTo(Integer value) {
            addCriterion("co2 <>", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2GreaterThan(Integer value) {
            addCriterion("co2 >", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2GreaterThanOrEqualTo(Integer value) {
            addCriterion("co2 >=", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2LessThan(Integer value) {
            addCriterion("co2 <", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2LessThanOrEqualTo(Integer value) {
            addCriterion("co2 <=", value, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2In(List<Integer> values) {
            addCriterion("co2 in", values, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2NotIn(List<Integer> values) {
            addCriterion("co2 not in", values, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2Between(Integer value1, Integer value2) {
            addCriterion("co2 between", value1, value2, "co2");
            return (Criteria) this;
        }

        public Criteria andCo2NotBetween(Integer value1, Integer value2) {
            addCriterion("co2 not between", value1, value2, "co2");
            return (Criteria) this;
        }

        public Criteria andTemperatureIsNull() {
            addCriterion("temperature is null");
            return (Criteria) this;
        }

        public Criteria andTemperatureIsNotNull() {
            addCriterion("temperature is not null");
            return (Criteria) this;
        }

        public Criteria andTemperatureEqualTo(Integer value) {
            addCriterion("temperature =", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureNotEqualTo(Integer value) {
            addCriterion("temperature <>", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureGreaterThan(Integer value) {
            addCriterion("temperature >", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureGreaterThanOrEqualTo(Integer value) {
            addCriterion("temperature >=", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureLessThan(Integer value) {
            addCriterion("temperature <", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureLessThanOrEqualTo(Integer value) {
            addCriterion("temperature <=", value, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureIn(List<Integer> values) {
            addCriterion("temperature in", values, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureNotIn(List<Integer> values) {
            addCriterion("temperature not in", values, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureBetween(Integer value1, Integer value2) {
            addCriterion("temperature between", value1, value2, "temperature");
            return (Criteria) this;
        }

        public Criteria andTemperatureNotBetween(Integer value1, Integer value2) {
            addCriterion("temperature not between", value1, value2, "temperature");
            return (Criteria) this;
        }

        public Criteria andLightintensityIsNull() {
            addCriterion("lightintensity is null");
            return (Criteria) this;
        }

        public Criteria andLightintensityIsNotNull() {
            addCriterion("lightintensity is not null");
            return (Criteria) this;
        }

        public Criteria andLightintensityEqualTo(Integer value) {
            addCriterion("lightintensity =", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityNotEqualTo(Integer value) {
            addCriterion("lightintensity <>", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityGreaterThan(Integer value) {
            addCriterion("lightintensity >", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityGreaterThanOrEqualTo(Integer value) {
            addCriterion("lightintensity >=", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityLessThan(Integer value) {
            addCriterion("lightintensity <", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityLessThanOrEqualTo(Integer value) {
            addCriterion("lightintensity <=", value, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityIn(List<Integer> values) {
            addCriterion("lightintensity in", values, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityNotIn(List<Integer> values) {
            addCriterion("lightintensity not in", values, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityBetween(Integer value1, Integer value2) {
            addCriterion("lightintensity between", value1, value2, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andLightintensityNotBetween(Integer value1, Integer value2) {
            addCriterion("lightintensity not between", value1, value2, "lightintensity");
            return (Criteria) this;
        }

        public Criteria andHumidityIsNull() {
            addCriterion("humidity is null");
            return (Criteria) this;
        }

        public Criteria andHumidityIsNotNull() {
            addCriterion("humidity is not null");
            return (Criteria) this;
        }

        public Criteria andHumidityEqualTo(Integer value) {
            addCriterion("humidity =", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityNotEqualTo(Integer value) {
            addCriterion("humidity <>", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityGreaterThan(Integer value) {
            addCriterion("humidity >", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityGreaterThanOrEqualTo(Integer value) {
            addCriterion("humidity >=", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityLessThan(Integer value) {
            addCriterion("humidity <", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityLessThanOrEqualTo(Integer value) {
            addCriterion("humidity <=", value, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityIn(List<Integer> values) {
            addCriterion("humidity in", values, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityNotIn(List<Integer> values) {
            addCriterion("humidity not in", values, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityBetween(Integer value1, Integer value2) {
            addCriterion("humidity between", value1, value2, "humidity");
            return (Criteria) this;
        }

        public Criteria andHumidityNotBetween(Integer value1, Integer value2) {
            addCriterion("humidity not between", value1, value2, "humidity");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}