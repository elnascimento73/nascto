import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from "../views/Login"
import Monitor from "../views/Monitor"
import Emissor from "../views/Emissor"
import DadosBasicos from "../views/DadosBasicos";
import Ferramentas from "../views/Ferramentas";
import DadosFiscais from "../views/DadosFiscais";
import CadastroEmpresa from "../views/CadastroEmpresa";
import CodigosFiscaisCFOP from "../views/CodigosFiscaisCFOP";
import AliquotasInterestaduaisdoICMS from "../views/AliquotasInterestaduaisdoICMS";
import NaturezaDasOperacoes from "../views/NaturezaDasOperacoes";
import CST_PIS from "../views/CST_PIS";
import CST_IPI from "../views/CST_IPI";
import CST_ICMS from "../views/CST_ICMS";
import CST_COFINS from "../views/CST_Cofins";
import CSOSN from "../views/CSOSN";
import AliquotasdeMVA from "../views/AliquotasdeMVA";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'monitor',
    component: Monitor
  },
  {
    path: '/emissor',
    name: 'emissor',
    component: Emissor
  },
  {
    path: '/dadosbasicos',
    name: 'dadosbasicos',
    component: DadosBasicos
  },
  {
    path: '/ferramentas',
    name: 'ferramentas',
    component: Ferramentas
  },
  {
    path: '/dadosfiscais',
    name: 'dadosfiscais',
    component: DadosFiscais
  },
  {
    path: '/cadastroempresa',
    name: 'cadastroempresa',
    component: CadastroEmpresa
  },
  {
    path: '/codigosfiscaisCFOP',
    name: 'codigosfiscaisCFOP',
    component: CodigosFiscaisCFOP
  },
  {
    path: '/aliquotasinterestaduaisICMS',
    name: 'aliquotasinterestaduaisICMS',
    component: AliquotasInterestaduaisdoICMS
  },
  {
    path: '/naturezadasoperacoes',
    name: 'naturezadasoperacoes',
    component: NaturezaDasOperacoes
  },
  {
    path: '/cst_pis',
    name: 'cst_pis',
    component: CST_PIS
  },
  {
    path: '/cst_ipi',
    name: 'cst_ipi',
    component: CST_IPI
  },
  {
    path: '/cst_icms',
    name: 'cst_icms',
    component: CST_ICMS
  },
  {
    path: '/cst_cofins',
    name: 'cst_cofins',
    component: CST_COFINS
  },
  {
    path: '/csosn',
    name: 'csosn',
    component: CSOSN
  },
  {
    path: '/aliquotasdeMVA',
    name: 'aliquotasdeMVA',
    component: AliquotasdeMVA
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router