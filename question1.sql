SELECT code , avg(govt_debt/gdp_per_capita) FROM countries
WHERE year > 2017
GROUP BY code
HAVING MIN (gdp_per_capita) > 40000
ORDER BY 2 DESC
LIMIT 3
