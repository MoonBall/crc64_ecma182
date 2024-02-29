#include <nan.h>
#include "crc64_ecma_182.h"

namespace CRC64JS {

static uint64_t ZERO = 0;

NAN_METHOD(CRC64)
{
    v8::Local<v8::Object> buff = Nan::To<v8::Object>(info[0]).ToLocalChecked();
    v8::Local<v8::Object> prevCrcBuf;
    if(info.Length() > 1)
    {
        prevCrcBuf = Nan::To<v8::Object>(info[1]).ToLocalChecked();
    }
    else
    {
        prevCrcBuf = Nan::CopyBuffer((char*)&ZERO, sizeof(ZERO)).ToLocalChecked();
    }
    uint64_t* prevCrcPtr = (uint64_t*)node::Buffer::Data(prevCrcBuf);

    v8::Local<v8::Object> ret = Nan::CopyBuffer((char*)&ZERO, sizeof(ZERO)).ToLocalChecked();
    uint64_t* retCrcPtr = (uint64_t*)node::Buffer::Data(ret);
    void* orig_buff = node::Buffer::Data(buff);
    *retCrcPtr = crc64js_base::crc64(*prevCrcPtr, orig_buff, node::Buffer::Length(buff));

    info.GetReturnValue().Set(ret);
}

NAN_METHOD(CRC64Combine)
{
    v8::Local<v8::Object> crc1 = Nan::To<v8::Object>(info[0]).ToLocalChecked();
    v8::Local<v8::Object> crc2 = Nan::To<v8::Object>(info[1]).ToLocalChecked();
    v8::Local<v8::Uint32> crc2BytesLen = Nan::To<v8::Uint32>(info[2]).ToLocalChecked();
    v8::Local<v8::Object> ret = Nan::CopyBuffer((char*)&ZERO, sizeof(ZERO)).ToLocalChecked();
    uint64_t* retCrcPtr = (uint64_t*)node::Buffer::Data(ret);

    *retCrcPtr = crc64js_base::crc64_combine(
            *(uint64_t*)node::Buffer::Data(crc1),
            *(uint64_t*)node::Buffer::Data(crc2),
            crc2BytesLen->Value());

    info.GetReturnValue().Set(ret);
}

NAN_METHOD(ToUInt64String)
{
    v8::Local<v8::Object> ret = Nan::To<v8::Object>(info[0]).ToLocalChecked();

    uint64_t* crc = (uint64_t*)node::Buffer::Data(ret);
    char str[32];
    sprintf(str, "%llu", *crc);

    info.GetReturnValue().Set(Nan::New(str).ToLocalChecked());
}

NAN_MODULE_INIT(Init)
{
    crc64js_base::crc64_init();
    Nan::Export(target, "crc64", CRC64);
    Nan::Export(target, "crc64Combine", CRC64Combine);
    Nan::Export(target, "toUInt64String", ToUInt64String);
}

NODE_MODULE(crc64, Init)

}
