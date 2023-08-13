<template>
    <div class="cards">
        <div class="card cases">
            <div class="title">
                <p>Cases</p>
            </div>
            <div class="today">
                <h1>+ {{ todayCases }}</h1>
            </div>
            <div class="total">
                <p>Total : + {{ cases }}</p>
            </div>
        </div>
        <div class="card recovered">
            <div class="title">
                <p>Recovered</p>
            </div>
            <div class="today">
                <h1>+ {{ todayRecovered }}</h1>
            </div>
            <div class="total">
                <p>Total : + {{ recovered }}</p>
            </div>
        </div>
        <div class="card deaths">
            <div class="title">
                <p>Deaths</p>
            </div>
            <div class="today">
                <h1>+ {{ todayDeaths }}</h1>
            </div>
            <div class="total">
                <p>Total : + {{ deaths }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: covid_all } = await useFetch('https://disease.sh/v3/covid-19/all')

const todayCases = covid_all?.value?.todayCases.toLocaleString('en-US')
const cases = covid_all?.value?.cases.toLocaleString('en-US')
const todayRecovered = covid_all?.value?.todayRecovered.toLocaleString('en-US')
const recovered = covid_all?.value?.recovered.toLocaleString('en-US')
const todayDeaths = covid_all?.value?.todayDeaths.toLocaleString('en-US')
const deaths = covid_all?.value?.deaths.toLocaleString('en-US')
</script>