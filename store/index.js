import { v4 as uuidv4 } from 'uuid';
export const state = () => ({
  allTemplates: {
    'wedding': [
      { id: 1, url: 'wedding-template.jpg', title: 'Minimalistyczny'},
      { id: 2, url: 'wedding-pastel.jpg', title: 'Pastelowy'},
      { id: 3, url: 'wedding-bw.jpg', title: 'Czarno-biały'},
      { id: 4, url: 'wedding-vintage.jpg', title: 'Vintage'},
      { id: 5, url: 'wedding-rustic.jpg', title: 'Rustykalny'},
      { id: 6, url: 'wedding-modern.jpg', title: 'Nowoczesny'},
    ],
    'occasion': [
      { id: 1, url: 'ocasion-template.jpg', title: 'Okazjonalne'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'trip': [
      { id: 1, url: 'trip-template.jpg', title: 'Podróżnicze'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'kids': [
      { id: 1, url: 'kids-template.jpg', title: 'Dziecięce'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'birthday': [
      { id: 1, url: 'birthday-template.jpg', title: 'Urodzinowe'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ],
    'person': [
      { id: 1, url: 'person-template.jpg', title: 'Dla specjalnej osoby'},
      { id: 2, url: 'wedding-pastel.jpg', title: ''},
      { id: 3, url: 'wedding-bw.jpg', title: ''},
      { id: 4, url: 'wedding-vintage.jpg', title: ''},
      { id: 5, url: 'wedding-rustic.jpg', title: ''},
      { id: 6, url: 'wedding-modern.jpg', title: ''},
    ]
  },
  layouts: {
    1 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 498, height: 498, top: 0, left: 0, type: 'image'}
    ],
    2 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 245, height: 498, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 245, height: 498, top: 0, left: 253, type: 'image'}
    ],
    3 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 498, height: 245, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 498, height: 245, top: 253, left: 0, type: 'image'}
    ],
    4 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 245, height: 245, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 245, height: 245, top: 0, left: 253, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 3, width: 498, height: 245, top: 253, left: 0, type: 'image'}
    ],
    5 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 245, height: 498, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 245, height: 245, top: 0, left: 253, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 3, width: 245, height: 245, top: 253, left: 253, type: 'image'}
    ],
    6 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 163, height: 330, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 330, height: 330, top: 0, left: 168, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 3, width: 498, height: 163, top: 335, left: 0, type: 'image'},
    ],
    7 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 245, height: 245, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 245, height: 245, top: 0, left: 253, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 3, width: 245, height: 245, top: 253, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 4, width: 245, height: 245, top: 253, left: 253, type: 'image'}
    ],
    8 : [
      { base64: '', file: null, orgImageId: null, zIndex: 1, width: 330, height: 330, top: 0, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 2, width: 330, height: 163, top: 335, left: 0, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 3, width: 163, height: 330, top: 168, left: 335, type: 'image'},
      { base64: '', file: null, orgImageId: null, zIndex: 4, width: 163, height: 163, top: 0, left: 335, type: 'image'}
    ]
  },
  images: [],
  frames: [
    {
      id: Date.now(),
      name: 'Frame1',
      url: require('~/assets/images/frames/Grunge_Frames.png')
    },
    {
      id: Date.now() + 1,
      name: 'Empty',
      url: null
    }
  ],
  pages: [
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
      'frame': null,
      'currentLayout' : 0
    },
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
      'frame': null,
      'currentLayout' : 0
    },
    {
      'elements': [],
      'backgroundImage': 'color',
      'backgroundColor': '#fff',
      'frame': null,
      'currentLayout' : 0
    },
  ],
  currentPage: 0,
  loading: false
})

import Vue from 'vue'

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_CURRENT_PAGE_FRAME(state, frame) {
    state.pages[state.currentPage].frame = frame
  },
  ADD_IMAGE(state, imageObj) {
    state.images.push(imageObj)
  },
  ADD_ELEMENT(state, type){
    var page = state.pages[state.currentPage]['elements']
    var id = uuidv4()
    var z = state.pages[state.currentPage]['elements'].length + 1
    if(type === 'image')
      page.push({ id: id, base64: '', file: null, orgImageId: null, zIndex: z, width: 200, height: 200, top: 0, left: 0, type: 'image'})
    else if(type === 'text')
      page.push({ id: id, text: 'Dodaj tekst', zIndex: 1, width: 200, height: 200, top: 0, left: 0, type: 'text'})
  },
  ADD_LAYOUT_ELEMENT(state, element){
    var page = state.pages[state.currentPage]['elements']
    var id = uuidv4()
    var z = state.pages[state.currentPage]['elements'].length + 1
    element['zIndex'] = z
    element['id'] = id
    page.push(element)
  },
  ADD_IMAGE_TO_PAGE(state, imageObj) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == imageObj.itemId)
    obj.base64 = imageObj.base64
    obj.file = imageObj.file
    obj.orgImageId = imageObj.orgImageId
  },
  DELETE_IMAGE_BY_INDEX(state, idx){
    state.images.splice(idx, 1)
  },
  UPDATE_IMAGE_BY_INDEX(state, {newObj, idx}) {
    state.images[idx] = newObj
  },
  UPDATE_IMAGE_FROM_PAGE_BY_INDEX(state, {newObj, idx}) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == idx)
    obj.base64 = newObj.base64
    obj.file = newObj.file
  },
  CHANGE_Z_TO_BOTTOM(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == id)
    if (obj.zIndex === 1){
      return
    }
    obj.zIndex = 1
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== page.length){
        image.zIndex = image.zIndex + 1
      }
    })
  },
  CHANGE_Z_TO_TOP(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == id)
    if (obj.zIndex === page.length){
      return
    }
    obj.zIndex = page.length
    page.forEach((image) => {
      if(image !== obj && image.zIndex !== 1){
        image.zIndex = image.zIndex - 1
      }
    })
  },
  RESIZE_ELEMENT(state, {newSize, idx}){
    var page = state.pages[state.currentPage]['elements']
    var obj = page.find(element => element.id == idx)
    obj.width = newSize.width
    obj.height = newSize.height
    obj.top = newSize.top
    obj.left = newSize.left
  },
  CHANGE_CURRENT_PAGE(state, number){
    state.currentPage = number
  },
  ADD_PAGE(state){
    state.pages.splice(state.currentPage, 0 , {'elements': [], 'backgroundImage': 'color','backgroundColor': '#fff', 'currentLayout' : 0})
  },
  REMOVE_PAGE(state, number){
    state.pages.splice(state.currentPage, 1)
    state.currentPage = number
  },
  UPDATE_BG_IMAGE(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = newBg
  },
  UPDATE_BG_COLOR(state, newBg){
    var page = state.pages[state.currentPage]
    page['backgroundImage'] = 'color'
    page['backgroundColor'] = newBg
  },
  DELETE_ELEMENT(state, id) {
    var page = state.pages[state.currentPage]['elements']
    var newPage = page.filter((element) => element.id !== id)
    state.pages[state.currentPage]['elements'] = newPage
  },
  DELETE_ALL_ELEMENTS(state){
    state.pages[state.currentPage]['elements'] = []
  },
  UPDATE_ELEMENT(state, {id, newEl}) {
    const elIdx = state.pages[state.currentPage]['elements'].findIndex(element => element.id === id)
    if(elIdx >= 0) {
      Vue.set(state.pages[state.currentPage]['elements'], elIdx, newEl)
      // state.pages[state.currentPage]['elements'][elIdx] = newEl
    }
  },
  UPDATE_LAYOUT(state, id){
    var page = state.pages[state.currentPage]
    page['current_layout'] = id
  }
}

export const getters = {
  getTemplatesByCategory: (state) => (category) => {
    return state.allTemplates[category]
  },
  getTemplateById: (state) => (category, id) => {
    return state.allTemplates[category].find(template => template.id == id)
  },
  getPhotos: (state) => state.images,
  getPhotosFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'image'),
  getTextFieldsFromPage: (state) => state.pages[state.currentPage]['elements'].filter(element => element.type === 'text'),
  getElementFromCurrentPage: (state) => (id) => state.pages[state.currentPage]['elements'].find(element => element.id === id) ?? '',
  getPages: (state) => state.pages,
  getPageById: (state) => (id) => state.pages[id],
  getCurrentPage: (state) => state.currentPage,
  getFrames: (state) => state.frames,
  getCurrentPageData: (state) => state.pages[state.currentPage],
  getElementsFromLayout: (state) => (id) => state.layouts[id],
  getLoading: (state) => state.loading
}
