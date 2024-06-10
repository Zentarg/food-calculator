export interface ParameterType {
    ParameterId: number;
    ParameterNameDa: string;
    ParameterNameEn: string;
    Unit: string;
    ParameterGroupId: number;
    EuroFirCode: string | null;
    EuroFirDescriptor: string | null;
    EFSAParamCode: string | null;
    EFSAParamName: string | null;
    PubChemCID: string | null;
    KEGG: string | null;
    ChEBI: string | null;
    ChEMBL: string | null;
    HMDB: string | null;
    CasNr: string | null;
    Formula: string | null;
    MolWeight: string | null;
    Density: string | null;
    CLogP: string | null;
}