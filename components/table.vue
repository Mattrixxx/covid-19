<template>
    <div class="table-wrapper">
        <table class="fl-table">
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="countries in covid_countries" :key="countries">
                    <td style="padding: 0; display: flex; justify-content: center;"><img :src="`https://flagsapi.com/${countries?.countryInfo?.iso2}/flat/48.png`"> </td>
                    <td>{{ countries?.country }}</td>
                    <td>{{ countries?.cases }}</td>
                    <td>{{ countries?.recovered }}</td>
                    <td>{{ countries?.deaths }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const { data: covid_countries } = await useFetch('https://disease.sh/v3/covid-19/countries')
</script>