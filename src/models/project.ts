export interface ProjectDTO {
    id:string,
    company_id: string
    name: string
    description: string
    number:	string
    status:	string //enum
    thumbnail_url: string
    order_number: string
    order_value: number
    self_billing: boolean
    billing_method: string //enum
    retention_method: string //enum
    start_date:string
    end_date: string
    practical_completion_date: string
    final_retention_date: string
    has_imported_schedule_of_rates: boolean
    mcd_percentage: number
    retention_percentage: number
    material_markup: number
    labour_markup: number
    subcontractor_markup: number
    starrated_material_markup: number
    starrated_labour_markup: number
    starrated_subcontractor_markup: number
    archived: boolean
    created_at: string
    updated_at: string
    project_manager: ProjectManagerDTO
    site_manager: SiteManagerDTO
    client: ClientDTO
    nullable: true
    addresses: AddressDTO[]
}

export interface AddressDTO {
    id:number
    company_id:string
    line_1:string
    line_2: string
    county:string
    postcode:string
    country:string
    what3words: string
    created_at:string
    updated_at:string
}

export interface ProjectManagerDTO {
    id: string
    company_id: string
    first_name: string
    last_name: string
    email: string
    roles: string
    updated_at: string
}

export interface SiteManagerDTO {
    id: string
    company_id: string
    first_name: string
    last_name: string
    email: string
    roles: string
    updated_at: string
}

export interface ClientDTO {
    id: string
    company_id: string
    name: string
    vat_number: string
    unique_tax_reference: string
    registration_number: string
    registration_region: number
    updated_at: string
}