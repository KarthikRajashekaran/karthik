export const skillGroups = [
	{
		label: 'Languages',
		items: ['Python', 'SQL', 'PySpark', 'Bash', 'PL/SQL'],
	},
	{
		label: 'Cloud & warehouse',
		items: ['Snowflake', 'AWS', 'Kubernetes', 'S3'],
	},
	{
		label: 'Orchestration & ELT',
		items: ['Apache Airflow', 'dbt', 'Flyway'],
	},
	{
		label: 'Data & AI platform',
		items: [
			'Snowflake Cortex',
			'Semantic views',
			'Cortex Analyst & Agents',
			'Cortex Search',
		],
	},
	{
		label: 'Quality & observability',
		items: ['dbt tests', 'Great Expectations', 'Elementary'],
	},
	{
		label: 'DevOps',
		items: ['GitLab CI/CD', 'Terraform', 'Docker', 'Linux'],
	},
	{
		label: 'BI & collaboration',
		items: ['Tableau', 'Power BI', 'Hex', 'Agile'],
	},
] as const;
