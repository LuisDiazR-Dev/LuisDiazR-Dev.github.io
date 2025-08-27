export interface AboutMeCv {
	userName: string
	alias: string
	role: string
	location: string
	phone: string
	email: string
	aboutMe: string[]
}
export interface SocialMedia {
	linkedInURL: string
	githubURL: string
}
export interface Project {
	id: number
	name: string
	category: string[]
	repositoryUrl: string
	deploymentUrl: string
	imageUrl: string
	description: string
	features: string[]
	technologies: string[]
}

// Definición de niveles
export enum SkillLevel {
	Iniciado = 'Iniciado',
	Medio = 'Medio',
	Avanzado = 'Avanzado',
}

// Tipo de cada skill
export interface SkillDetail {
	name: string
	level: SkillLevel
	iconUrl: string
}

// Tipo de la colección
export interface Skills {
	Core: Record<string, SkillDetail>
	Complements: Record<string, SkillDetail>
	NextGoals: Record<string, SkillDetail>
}

export interface Experience {
	title: string
	company: string
	companyURL: string
	startDate: string
	endDate: string
	description: string[]
	toolsAndTechnologies: string[]
}

export interface Education {
	title: string
	institution: string
	description: string
	date: string
}
export interface ComplementaryEducation {
	title: string
	institution: string
	year: string
	additionalInfo?: string
}

export interface Languages {
	español: string
	inglés: string
}
