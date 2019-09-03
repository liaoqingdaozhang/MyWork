package com.jwj.entity;

import java.util.ArrayList;
import java.util.List;

public class ExamineExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public ExamineExample() {
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

        public Criteria andExaminetimeIsNull() {
            addCriterion("examinetime is null");
            return (Criteria) this;
        }

        public Criteria andExaminetimeIsNotNull() {
            addCriterion("examinetime is not null");
            return (Criteria) this;
        }

        public Criteria andExaminetimeEqualTo(String value) {
            addCriterion("examinetime =", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeNotEqualTo(String value) {
            addCriterion("examinetime <>", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeGreaterThan(String value) {
            addCriterion("examinetime >", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeGreaterThanOrEqualTo(String value) {
            addCriterion("examinetime >=", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeLessThan(String value) {
            addCriterion("examinetime <", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeLessThanOrEqualTo(String value) {
            addCriterion("examinetime <=", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeLike(String value) {
            addCriterion("examinetime like", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeNotLike(String value) {
            addCriterion("examinetime not like", value, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeIn(List<String> values) {
            addCriterion("examinetime in", values, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeNotIn(List<String> values) {
            addCriterion("examinetime not in", values, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeBetween(String value1, String value2) {
            addCriterion("examinetime between", value1, value2, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetimeNotBetween(String value1, String value2) {
            addCriterion("examinetime not between", value1, value2, "examinetime");
            return (Criteria) this;
        }

        public Criteria andExaminetypeIsNull() {
            addCriterion("examinetype is null");
            return (Criteria) this;
        }

        public Criteria andExaminetypeIsNotNull() {
            addCriterion("examinetype is not null");
            return (Criteria) this;
        }

        public Criteria andExaminetypeEqualTo(String value) {
            addCriterion("examinetype =", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeNotEqualTo(String value) {
            addCriterion("examinetype <>", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeGreaterThan(String value) {
            addCriterion("examinetype >", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeGreaterThanOrEqualTo(String value) {
            addCriterion("examinetype >=", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeLessThan(String value) {
            addCriterion("examinetype <", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeLessThanOrEqualTo(String value) {
            addCriterion("examinetype <=", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeLike(String value) {
            addCriterion("examinetype like", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeNotLike(String value) {
            addCriterion("examinetype not like", value, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeIn(List<String> values) {
            addCriterion("examinetype in", values, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeNotIn(List<String> values) {
            addCriterion("examinetype not in", values, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeBetween(String value1, String value2) {
            addCriterion("examinetype between", value1, value2, "examinetype");
            return (Criteria) this;
        }

        public Criteria andExaminetypeNotBetween(String value1, String value2) {
            addCriterion("examinetype not between", value1, value2, "examinetype");
            return (Criteria) this;
        }

        public Criteria andYearIsNull() {
            addCriterion("year is null");
            return (Criteria) this;
        }

        public Criteria andYearIsNotNull() {
            addCriterion("year is not null");
            return (Criteria) this;
        }

        public Criteria andYearEqualTo(String value) {
            addCriterion("year =", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearNotEqualTo(String value) {
            addCriterion("year <>", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearGreaterThan(String value) {
            addCriterion("year >", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearGreaterThanOrEqualTo(String value) {
            addCriterion("year >=", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearLessThan(String value) {
            addCriterion("year <", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearLessThanOrEqualTo(String value) {
            addCriterion("year <=", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearLike(String value) {
            addCriterion("year like", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearNotLike(String value) {
            addCriterion("year not like", value, "year");
            return (Criteria) this;
        }

        public Criteria andYearIn(List<String> values) {
            addCriterion("year in", values, "year");
            return (Criteria) this;
        }

        public Criteria andYearNotIn(List<String> values) {
            addCriterion("year not in", values, "year");
            return (Criteria) this;
        }

        public Criteria andYearBetween(String value1, String value2) {
            addCriterion("year between", value1, value2, "year");
            return (Criteria) this;
        }

        public Criteria andYearNotBetween(String value1, String value2) {
            addCriterion("year not between", value1, value2, "year");
            return (Criteria) this;
        }

        public Criteria andCarIdIsNull() {
            addCriterion("car_id is null");
            return (Criteria) this;
        }

        public Criteria andCarIdIsNotNull() {
            addCriterion("car_id is not null");
            return (Criteria) this;
        }

        public Criteria andCarIdEqualTo(Integer value) {
            addCriterion("car_id =", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdNotEqualTo(Integer value) {
            addCriterion("car_id <>", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdGreaterThan(Integer value) {
            addCriterion("car_id >", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("car_id >=", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdLessThan(Integer value) {
            addCriterion("car_id <", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdLessThanOrEqualTo(Integer value) {
            addCriterion("car_id <=", value, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdIn(List<Integer> values) {
            addCriterion("car_id in", values, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdNotIn(List<Integer> values) {
            addCriterion("car_id not in", values, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdBetween(Integer value1, Integer value2) {
            addCriterion("car_id between", value1, value2, "carId");
            return (Criteria) this;
        }

        public Criteria andCarIdNotBetween(Integer value1, Integer value2) {
            addCriterion("car_id not between", value1, value2, "carId");
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