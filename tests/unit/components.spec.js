import { expect } from 'chai'
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils'
import Datatable from '@/components/Datatable.vue'
import EditModal from '@/components/EditModal.vue'
import Vuetify from 'vuetify';

Vue.use(Vuetify);

const items = [
  {
    id: '17528C9F-773F-1651-55AE-848FDAABE446',
    name: 'Bertha Strong',
    description: 'hendrerit.',
    date: '2018-05-22T00:16:48-07:00',
    amount: '420.64'
  },
  {
    id: '61CBD2A7-C3C7-87C7-8072-C1E86220A07A',
    name: 'Darryl Rosario',
    description: 'vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum',
    date: '2018-06-24T20:25:09-07:00',
    amount: '44.99'
  },
  {
    id: '8668B8F0-7622-1ECC-DAC8-47751BFADA7D',
    name: 'Joan Bean',
    description: 'risus. Nulla eget metus eu erat',
    date: '2017-05-04T10:11:50-07:00',
    amount: '313.18'
  },
  {
    id: '67C61ACD-F36C-9E5C-F5C9-1C48C3644F8C',
    name: 'Hedda Rowe',
    description: 'egestas nunc sed libero. Proin sed turpis nec',
    date: '2019-06-30T04:29:56-07:00',
    amount: '412.51'
  },
  {
    id: '28CB7BA0-4EE5-15A3-C781-1D4E57B01F56',
    name: 'Davis Warner',
    description: 'dolor. Nulla semper tellus id nunc',
    date: '2017-10-10T11:22:10-07:00',
    amount: '175.14'
  },
  {
    id: 'E624450C-EACE-C049-A094-AEA22E62DF2B',
    name: 'Tasha Rodriquez',
    description: 'ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper',
    date: '2018-10-01T08:03:47-07:00',
    amount: '285.60'
  },
  {
    id: 'D51E6B1C-EFD0-B602-DCA8-2F2ABC49693E',
    name: 'Kiona Stephens',
    description: 'purus sapien,',
    date: '2018-04-01T16:54:28-07:00',
    amount: '271.16'
  },
  {
    id: 'F395FFC4-E8B9-9C51-A7B7-012A8A1D0FD7',
    name: 'Connor Harding',
    description: 'In',
    date: '2017-12-30T00:57:37-08:00',
    amount: '814.88'
  },
  {
    id: '881F6357-5CAA-B0FF-A711-037E8D2384D4',
    name: 'Ferris Gallagher',
    description: 'nec tempus scelerisque, lorem',
    date: '2018-03-03T00:27:51-08:00',
    amount: '156.74'
  },
  {
    id: '011FF0B3-EEE2-202B-66AE-D64933319F3F',
    name: 'Aurelia Pearson',
    description: 'et magnis dis parturient montes, nascetur ridiculus mus. Donec',
    date: '2018-11-15T19:15:30-08:00',
    amount: '-637.04'
  },
  {
    id: '9EE856BF-03AC-8314-DB99-4846DBAC6744',
    name: 'Patience Schultz',
    description: 'lobortis quam a felis',
    date: '2018-04-24T07:38:38-07:00',
    amount: '426.17'
  },
  {
    id: '663F9D4F-C419-F371-B2B4-0BFCABF13C83',
    name: 'Vernon Fischer',
    description: 'eu sem. Pellentesque ut',
    date: '2018-01-28T08:58:47-08:00',
    amount: '953.61'
  }
]

describe('Datatable.vue', () => {
  it('Checks if datatable is rendered properly', () => {
    const wrapper = shallowMount(Datatable, {
      propsData: {
        items
      }
    })

    // Test if EditModal component exists on the Datatable component
    expect(wrapper.find(EditModal).is(EditModal)).to.be.true
    // Test if props set on component is the same as the one we passed
    expect(wrapper.props().items).to.equal(items)

    // Test if first table td text match the values on the first item of the prop
    // object that was passed
    const firstId = items[0].id
    const firstAmount = items[0].amount
    expect(wrapper.find('table')
      .find('tbody > tr > td:first-child')
      .text()).to.equal(firstId)
    
    expect(wrapper.find('table')
      .find('tbody > tr > td:last-child')
      .text()).to.equal(firstAmount)
  })

  it('Checks if datatable basic functionalities are working', () => {
    const wrapper = shallowMount(Datatable, {
      propsData: {
        items
      }
    })
    
    // Test if on first table row click sets the data property itemId
    // to the first item of the prop object that was passed and
    // dialog data prop should be set to true
    const firstId = items[0].id
    wrapper.find('table').find('tbody > tr > td:first-child').trigger('click')
    expect(wrapper.vm.itemId).to.equal(firstId)
    expect(wrapper.vm.dialog).to.be.true

    // Check if field is enabled after setting the searchField data property
    expect(wrapper.find('#search-text').attributes('disabled')).to.equal('true')
    wrapper.setData({ searchField: 'name' })
    expect(wrapper.find('#search-text').attributes('disabled')).to.be.undefined
  })
})

describe('EditModal.vue', () => {
  it('Checks if computed property to display modal is working depending on prop showDialog', () => {
    let wrapper = shallowMount(EditModal, {
      propsData: {
        showDialog: false
      }
    })

    expect(wrapper.vm.dialogStatus).to.be.false
    
    wrapper = shallowMount(EditModal, {
      propsData: {
        showDialog: true
      }
    })

    expect(wrapper.vm.dialogStatus).to.be.true
  })

  it('Tests parent to child communication', () => {
    const parentWrapper = shallowMount(Datatable, {
      propsData: {
        items
      }
    })

    expect(parentWrapper.vm.dialog).to.be.false

    parentWrapper.find('table')
      .find('tbody > tr > td:first-child')
      .trigger('click')

    expect(parentWrapper.vm.dialog).to.be.true
  })
})