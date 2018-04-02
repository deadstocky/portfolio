import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignIn from '@/components/SignIn'
import Portfolio from '@/components/Portfolio'
import About from '@/components/About'
import SalesJournal from '@/components/Portfolio/SalesJournal'
import EnsembleWebsite from '@/components/Portfolio/EnsembleWebsite'
import SponsorshipPortal from '@/components/Portfolio/SponsorshipPortal'
import InfohubPortable from '@/components/Portfolio/InfohubPortable'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sign-in',
      component: SignIn
    },
    {
      path: '/portfolio',
      component: Portfolio,
      beforeEnter: AuthGuard
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/salesjournal',
      component: SalesJournal,
      beforeEnter: AuthGuard
    },
    {
      path: '/ensemblewebsite',
      component: EnsembleWebsite,
      beforeEnter: AuthGuard
    },
    {
      path: '/sponsorshipportal',
      component: SponsorshipPortal,
      beforeEnter: AuthGuard
    },
    {
      path: '/infohubportable',
      component: InfohubPortable,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
