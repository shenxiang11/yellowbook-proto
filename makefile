.PHONY: protoc
protoc:
    @protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_out=. ./proto/*.proto
	@protoc --proto_path=proto --go_out=proto --go_opt=paths=source_relative ./proto/*.proto
