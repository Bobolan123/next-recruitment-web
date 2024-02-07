export interface ICompany {
    id: number;
    name: string;
    description: string;
    logo: {
        type: string;
        data: number[];
    };
    location: string;
}

export interface IJob {
    id: number;
    name: string;
    description: string;
    skills: string;
    count: number;
    status: string;
    salary: number;
    created_at: string;
    updated_at: string;
    company: ICompany;
    level: string,
    resumes: []
}

export interface IAllJob {
    statusCode: number;
    message: string;
    data: IJob[];
}


