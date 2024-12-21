import BaseDataAccess from "./baseDataAccess";
import UserContractDA from "./userContractDA";
import { Workflows, UserContracts } from "../models";

const workflowsDA = new BaseDataAccess(Workflows);
const userContractsDA = new UserContractDA(UserContracts);

export {
    workflowsDA,
    userContractsDA
}
